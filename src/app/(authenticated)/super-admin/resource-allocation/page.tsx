'use client'

import { Prisma } from '@prisma/client'
import { Typography, Button, Table, Spin, Row, Col } from 'antd'
import { PlayCircleOutlined, HistoryOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ResourceAllocationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: allocations,
    isLoading: isLoadingAllocations,
    refetch: refetchAllocations,
  } = Api.allocation.findMany.useQuery({
    include: { hospital: true, resource: true },
  })

  const { mutateAsync: runAllocationEngine } =
    Api.allocation.create.useMutation()

  const handleRunEngine = async () => {
    try {
      await runAllocationEngine({
        data: {
          /* Add required allocation data here */
        },
      })
      enqueueSnackbar('Resource allocation engine run successfully', {
        variant: 'success',
      })
      refetchAllocations()
    } catch (error) {
      enqueueSnackbar('Failed to run resource allocation engine', {
        variant: 'error',
      })
    }
  }

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
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Resource Allocation</Title>
      <Paragraph>
        As a super admin, you can run the resource allocation engine to
        distribute resources to hospitals based on their needs. You can also
        view the allocation history to track past resource distributions.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Button
            type="primary"
            icon={<PlayCircleOutlined />}
            onClick={handleRunEngine}
          >
            Run Allocation Engine
          </Button>
          <Button
            type="default"
            icon={<HistoryOutlined />}
            onClick={() =>
              router.push('/super-admin/resource-allocation-history')
            }
            style={{ marginLeft: 8 }}
          >
            View Allocation History
          </Button>
        </Col>
        <Col span={24}>
          {isLoadingAllocations ? (
            <Spin />
          ) : (
            <Table dataSource={allocations} columns={columns} rowKey="id" />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
