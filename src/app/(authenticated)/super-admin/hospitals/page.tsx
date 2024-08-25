'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Form,
  Input,
  Button,
  Table,
  Space,
  Popconfirm,
  Row,
  Col,
} from 'antd'
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HospitalManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: hospitals,
    isLoading,
    refetch,
  } = Api.hospital.findMany.useQuery({})
  const { mutateAsync: createHospital } = Api.hospital.create.useMutation()
  const { mutateAsync: updateHospital } = Api.hospital.update.useMutation()
  const { mutateAsync: deleteHospital } = Api.hospital.delete.useMutation()

  const [form] = Form.useForm()
  const [editingHospital, setEditingHospital] =
    useState<Prisma.HospitalCreateInput | null>(null)

  const handleFinish = async (values: Prisma.HospitalCreateInput) => {
    try {
      if (editingHospital) {
        await updateHospital({
          where: { id: editingHospital.id },
          data: values,
        })
        enqueueSnackbar('Hospital updated successfully', { variant: 'success' })
      } else {
        await createHospital({ data: values })
        enqueueSnackbar('Hospital created successfully', { variant: 'success' })
      }
      form.resetFields()
      setEditingHospital(null)
      refetch()
    } catch (error) {
      enqueueSnackbar('Error saving hospital', { variant: 'error' })
    }
  }

  const handleEdit = (hospital: Prisma.HospitalCreateInput) => {
    setEditingHospital(hospital)
    form.setFieldsValue(hospital)
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteHospital({ where: { id } })
      enqueueSnackbar('Hospital deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Error deleting hospital', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Contact Number',
      dataIndex: 'contactNumber',
      key: 'contactNumber',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: Prisma.HospitalCreateInput) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Popconfirm
            title="Are you sure to delete this hospital?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Hospital Management</Title>
      <Text>Manage the list of hospitals and add new ones to the portal.</Text>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Form form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item
              name="name"
              label="Hospital Name"
              rules={[
                { required: true, message: 'Please input the hospital name!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: 'Please input the address!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="contactNumber"
              label="Contact Number"
              rules={[
                { required: true, message: 'Please input the contact number!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                {editingHospital ? 'Update Hospital' : 'Add Hospital'}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Table
            dataSource={hospitals}
            columns={columns}
            rowKey="id"
            loading={isLoading}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
