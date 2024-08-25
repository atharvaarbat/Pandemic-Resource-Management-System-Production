'use client'

import { Prisma } from '@prisma/client'
import { Typography, Table, Spin } from 'antd'
import { HistoryOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ResourceAllocationHistoryPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: allocations,
    isLoading,
    refetch,
  } = Api.allocation.findMany.useQuery({
    include: {
      hospital: true,
      resource: true,
    },
  })

  const columns = [
    {
      title: 'Hospital',
      dataIndex: ['hospital', 'name'],
      key: 'hospital',
    },
    {
      title: 'Resource',
      dataIndex: ['resource', 'name'],
      key: 'resource',
    },
    {
      title: 'Allocated Quantity',
      dataIndex: 'allocatedQuantity',
      key: 'allocatedQuantity',
    },
    {
      title: 'Allocation Date',
      dataIndex: 'allocationDate',
      key: 'allocationDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <HistoryOutlined /> Resource Allocation History
      </Title>
      <Paragraph>
        As a super admin, you can view the history of resource allocations to
        analyze past distributions and make informed decisions.
      </Paragraph>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Table
          dataSource={allocations}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      )}
    </PageLayout>
  )
}
