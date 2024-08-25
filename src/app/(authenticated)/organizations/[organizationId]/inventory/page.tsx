'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Row,
  Col,
  Table,
  Space,
  Modal,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function InventoryManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [currentResource, setCurrentResource] =
    useState<Prisma.ResourceGetPayload<{}> | null>(null)

  const {
    data: resources,
    isLoading,
    refetch,
  } = Api.resource.findMany.useQuery({ include: { hospitalResources: true } })
  const { mutateAsync: createResource } = Api.resource.create.useMutation()
  const { mutateAsync: updateResource } = Api.resource.update.useMutation()
  const { mutateAsync: deleteResource } = Api.resource.delete.useMutation()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setIsEditMode(false)
    setCurrentResource(null)
  }

  const handleEdit = (resource: Prisma.ResourceGetPayload<{}>) => {
    setCurrentResource(resource)
    setIsEditMode(true)
    showModal()
  }

  const handleDelete = async (resourceId: string) => {
    await deleteResource({ where: { id: resourceId } })
    enqueueSnackbar('Resource deleted successfully', { variant: 'success' })
    refetch()
  }

  const handleFinish = async (values: any) => {
    if (isEditMode && currentResource) {
      await updateResource({ where: { id: currentResource.id }, data: values })
      enqueueSnackbar('Resource updated successfully', { variant: 'success' })
    } else {
      await createResource({ data: values })
      enqueueSnackbar('Resource created successfully', { variant: 'success' })
    }
    refetch()
    handleCancel()
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Inventory Management</Title>
      <Text>
        Manage and update the inventory of resources available in the hospital.
      </Text>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            Add Resource
          </Button>
          <Table
            columns={columns}
            dataSource={resources}
            loading={isLoading}
            rowKey="id"
            style={{ marginTop: 20 }}
          />
        </Col>
      </Row>
      <Modal
        title={isEditMode ? 'Edit Resource' : 'Add Resource'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={handleFinish} initialValues={currentResource}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: 'Please input the resource name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="Type"
            rules={[
              { required: true, message: 'Please select the resource type!' },
            ]}
          >
            <Select>
              <Option value="blood">Blood</Option>
              <Option value="oxygen">Oxygen Cylinder</Option>
              <Option value="medicine">Medicine</Option>
              <Option value="equipment">Equipment</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isEditMode ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
