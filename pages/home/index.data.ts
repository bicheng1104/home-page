import { CustomerImage, NextYearTarget, PanelDataItem, TopData } from './index.types'
import { genUuid } from '@/utils/utils'

export const topData: TopData = {
  miniTitle: 'Welcome to T-Mobile DevEdge',
  title: 'Where developers lead the way in innovation',
  description:
    'T-Mobile DevEdge makes it easy for developers to connect to our leading 5G network for building and optimizing inventive business solutions.',
}

export const panelData: PanelDataItem[] = [
  {
    uuid: genUuid(),
    title: 'Internet of Things (IoT)',
    imageUrl: 'internet-of-things',
    content:
      'Getting your IoT device ready for our network can be as simple as using pre-certified devices, chips, and modules—meaning you can accelerate your go-to-market timing and show off your concept sooner rather than later. If your device is complete and the hardware is not already certified, we can help you through the certification process. ',
    buttonText: 'Learn more',
  },
  {
    uuid: genUuid(),
    title: 'Open Source Projects',
    imageUrl: 'open-source-projects',
    content:
      'Explore T-Mobile’s open source projects that can help bolster your own solutions, from continuous compliance monitoring to a simplified secrets management solution to serverless applications. ',
    buttonText: 'Browse projects',
  },
  {
    uuid: genUuid(),
    title: 'Solutions',
    imageUrl: 'solutions',
    content:
      'Protect your organization with our Call Verification and Fraud Prevention APIs that help detect potentially fraudulent activity before it becomes an issue. And, if you’re company is looking for a boost in call-center success, our Enhanced caller ID API lets you brand your company name, department, or reasons for calling to help increase your number of calls answered.',
    buttonText: 'Explore our products',
  },
]

export const nextYearTargets: NextYearTarget[] = [
  { targetText: 'Asset tracking', uuid: genUuid() },
  { targetText: 'XR enablement', uuid: genUuid() },
  { targetText: 'Improved mobile customer interaction', uuid: genUuid() },
  { targetText: 'Supply chain management', uuid: genUuid() },
  { targetText: 'Autonomous vehicles', uuid: genUuid() },
  { targetText: 'IoT Developer Kit', uuid: genUuid() },
  { targetText: 'A faster, easier, and more affordable certification process', uuid: genUuid() },
]

export const customerImages: CustomerImage[] = [
  {
    src: 'finance.png',
    uuid: genUuid(),
  },
  {
    src: 'technology.png',
    uuid: genUuid(),
  },
  {
    src: 'retail.png',
    uuid: genUuid(),
  },
  {
    src: 'communication.png',
    uuid: genUuid(),
  },
  {
    src: 'energy.png',
    uuid: genUuid(),
  },
]
