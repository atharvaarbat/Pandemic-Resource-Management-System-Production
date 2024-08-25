'use client'

import { Prisma } from '@prisma/client'
import { Typography, Row, Col, Card, List, Spin } from 'antd'
import { BellOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const organizationId = params.organizationId

  const { data: hospitalResources, isLoading: isLoadingResources } =
    Api.hospitalResource.findMany.useQuery({
      where: { hospital: { organizationId } },
      include: { resource: true, hospital: true },
    })

  const { data: resourceAllocations, isLoading: isLoadingAllocations } =
    Api.allocation.findMany.useQuery({
      where: { hospital: { organizationId } },
      include: { resource: true, hospital: true },
    })

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Hospital Resource Status</Title>
      <Paragraph>
        As a hospital staff member, you can view the current status of your
        hospital's resources and see notifications about recent resource
        allocations.
      </Paragraph>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="Current Resource Inventory" bordered={false}>
            {isLoadingResources ? (
              <Spin />
            ) : (
              <List
                itemLayout="horizontal"
                dataSource={hospitalResources}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.resource?.name}
                      description={`Quantity: ${item.quantity.toString()}`}
                    />
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
        <Col span={24}>
          <Card
            title="Recent Resource Allocations"
            bordered={false}
            extra={<BellOutlined />}
          >
            {isLoadingAllocations ? (
              <Spin />
            ) : (
              <List
                itemLayout="horizontal"
                dataSource={resourceAllocations}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.resource?.name}
                      description={`Allocated Quantity: ${item.allocatedQuantity.toString()} on ${dayjs(item.allocationDate).format('MMMM D, YYYY')}`}
                    />
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
