'use client'

import { useState } from 'react'
import { Typography, Form, Input, Button, Table, Space, Spin } from 'antd'
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ResourceRequestPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const {
    data: resourceRequests,
    isLoading,
    refetch,
  } = Api.hospitalResource.findMany.useQuery({
    where: { hospitalId: params.hospitalId },
    include: { resource: true },
  })

  const { mutateAsync: createResourceRequest } =
    Api.hospitalResource.create.useMutation()

  const handleSubmit = async (values: any) => {
    setLoading(true)
    try {
      await createResourceRequest({
        data: {
          ...values,
          hospitalId: params.hospitalId,
          lastUpdated: new Date().toISOString(),
        },
      })
      enqueueSnackbar('Resource request submitted successfully', {
        variant: 'success',
      })
      form.resetFields()
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to submit resource request', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const columns = [
    {
      title: 'Resource Name',
      dataIndex: ['resource', 'name'],
      key: 'resourceName',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastUpdated',
      key: 'lastUpdated',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD HH:mm:ss'),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Resource Request</Title>
      <Paragraph>
        As a hospital staff member, you can request additional resources so that
        the super admin is aware of your hospital's needs. You can also view the
        status of your resource requests to know if and when the requested
        resources will be allocated.
      </Paragraph>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="resourceId"
          label="Resource ID"
          rules={[{ required: true, message: 'Please input the resource ID' }]}
        >
          <Input placeholder="Enter Resource ID" />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: 'Please input the quantity' }]}
        >
          <Input placeholder="Enter Quantity" type="number" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            icon={<PlusOutlined />}
          >
            Request Resource
          </Button>
        </Form.Item>
      </Form>

      <Space style={{ marginBottom: 16 }}>
        <Button onClick={async () => await refetch()} icon={<ReloadOutlined />}>
          Refresh
        </Button>
      </Space>

      {isLoading ? (
        <Spin />
      ) : (
        <Table
          columns={columns}
          dataSource={resourceRequests}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      )}
    </PageLayout>
  )
}
