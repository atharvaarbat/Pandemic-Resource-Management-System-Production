'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  MedicineBoxOutlined,
  SafetyOutlined,
  SyncOutlined,
  TeamOutlined,
  LineChartOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Real-Time Inventory Management',
      description:
        'Keep track of critical resources like blood, oxygen cylinders, and more with real-time updates.',
      icon: <SyncOutlined />,
    },
    {
      heading: 'Automated Resource Allocation',
      description:
        'Our sophisticated engine ensures timely distribution based on pandemic cases and shortages.',
      icon: <LineChartOutlined />,
    },
    {
      heading: 'Centralized Control',
      description:
        'Super admin oversight for streamlined operations and efficient resource management.',
      icon: <TeamOutlined />,
    },
    {
      heading: 'Secure Access',
      description:
        'Unique login IDs and passwords for each hospital to ensure data security and integrity.',
      icon: <SafetyOutlined />,
    },
    {
      heading: 'Enhanced Patient Care',
      description:
        'Ensure that your hospital is always prepared to provide the best care with adequate supplies.',
      icon: <MedicineBoxOutlined />,
    },
    {
      heading: 'Data-Driven Decisions',
      description:
        'Leverage real-time data and advanced algorithms to make informed decisions.',
      icon: <EditOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'Dr. John Smith',
      designation: 'Hospital Administrator',
      content:
        'This portal has revolutionized our inventory management. We no longer face critical shortages and can focus on patient care.',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Nurse Jane Doe',
      designation: 'Inventory Manager',
      content:
        'The automated resource allocation system is a game-changer. It ensures we get the supplies we need, exactly when we need them.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Dr. Michael Lee',
      designation: 'Healthcare Provider',
      content:
        'Having a centralized system has made our operations so much more efficient. Highly recommend it!',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Dr. Sarah Brown',
      designation: 'Chief Medical Officer',
      content:
        'The real-time updates and data-driven decisions have significantly improved our response times during emergencies.',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Dr. Emily White',
      designation: 'Hospital Director',
      content:
        'This portal is a must-have for any hospital looking to improve their resource management and patient care.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Nurse Anna Green',
      designation: 'Head Nurse',
      content:
        'We have seen a drastic reduction in resource shortages since we started using this portal. It’s incredibly efficient.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'FAQ',
      link: '#faq',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Essential features for small hospitals',
      monthly: 9,
      yearly: 99,
      features: ['Real-Time Inventory', 'Secure Access'],
    },
    {
      title: 'Pro',
      description: 'Advanced features for medium hospitals',
      monthly: 29,
      yearly: 299,
      features: [
        'Real-Time Inventory',
        'Secure Access',
        'Automated Allocation',
        'Centralized Control',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'All features for large hospitals',
      monthly: 49,
      yearly: 499,
      features: [
        'All Pro Features',
        'Enhanced Patient Care',
        'Data-Driven Decisions',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How secure is the portal?',
      answer:
        'The portal uses advanced security measures including unique login IDs and passwords for each hospital to ensure data security and integrity.',
    },
    {
      question: 'Can the system handle multiple hospitals?',
      answer:
        'Yes, the system is designed to manage resources for multiple hospitals with a centralized control for super admin oversight.',
    },
    {
      question: 'How does the automated resource allocation work?',
      answer:
        'The system uses a sophisticated engine that considers pandemic cases, rate of increase, and existing shortages to allocate resources efficiently.',
    },
    {
      question: 'Is there a trial period available?',
      answer:
        'Yes, we offer a 30-day free trial for hospitals to experience the benefits of our portal before committing to a subscription.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Register your hospital and get unique login credentials.',
    },
    {
      heading: 'Update Inventory',
      description: 'Regularly update your resource levels in the portal.',
    },
    {
      heading: 'Automated Allocation',
      description: 'Receive resources based on real-time data and needs.',
    },
    {
      heading: 'Monitor and Manage',
      description:
        'Use the dashboard to monitor and manage your resources efficiently.',
    },
  ]

  const painPoints = [
    {
      emoji: '😰',
      title: 'Frequent Shortages',
    },
    {
      emoji: '📉',
      title: 'Inefficient Management',
    },
    {
      emoji: '⏳',
      title: 'Delayed Responses',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Efficient Resource Management for Hospitals"
        subtitle="Streamline your inventory, ensure timely supplies, and enhance patient care."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/EM8V6R-pandemicresourcemanagementsystem-j2tn"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy hospitals"
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title="Trusted by Leading Healthcare Institutions"
      />
      <LandingPainPoints
        title="The Challenges Hospitals Face"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How Our Portal Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Seamless Resource Management"
        subtitle="Our portal provides the tools you need to manage your hospital's resources efficiently."
        features={features}
      />
      <LandingTestimonials
        title="What Our Users Say"
        subtitle="Hear from hospitals that have transformed their resource management with our portal."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose the Right Plan for Your Hospital"
        subtitle="Flexible pricing options to suit hospitals of all sizes."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We have answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your Resource Management?"
        subtitle="Sign up today and experience the difference."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
