import React from 'react'
import { Badge } from '@adminjs/design-system'

const ROLE_COLORS = {
  ADMIN: { background: '#E0E7FF', color: '#3730A3' },
  TEACHER: { background: '#DBEAFE', color: '#1D4ED8' },
  STUDENT: { background: '#E2E8F0', color: '#475569' },
}

const RoleBadgeRenderer = (props) => {
  const { record } = props
  const role = record?.params?.role
  const colors = ROLE_COLORS[role] || { background: '#E2E8F0', color: '#475569' }

  return <Badge style={{ background: colors.background, color: colors.color }}>{role}</Badge>
}

export default RoleBadgeRenderer
