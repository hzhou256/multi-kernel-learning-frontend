import { post } from '@/utils/response'

export function rnaDiseasePredict (data) {
  const url = '/predict/rna-disease'
  return post(url, data)
}

export function drugDiseasePredict (data) {
  const url = '/predict/drug-disease'
  return post(url, data)
}
