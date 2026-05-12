import React from 'react'
import { Text } from '@adminjs/design-system'

const EmailLinkRenderer = (props) => {
  const { record } = props
  const href = `/admin/resources/User/records/${record?.id}/show`

  return (
    <a href={href} style={{ textDecoration: 'none' }}>
      <Text style={{ color: '#4F46E5', fontWeight: 600 }}>{record?.params?.email}</Text>
    </a>
  )
}

export default EmailLinkRenderer
