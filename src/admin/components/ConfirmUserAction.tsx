import React, { useEffect } from 'react'
import { useNotice, useRecord } from 'adminjs'
import { ApiClient } from 'adminjs'

const api = new ApiClient()

const ConfirmUserAction = (props) => {
  const notice = useNotice()
  const { record } = props

  useEffect(() => {
    const confirmUser = async () => {
      const response = await api.recordAction({
        resourceId: 'User',
        recordId: record.id,
        actionName: 'confirm',
      })

      if (response.data.notice) {
        notice(response.data.notice)
      }

      window.location.href = '/admin/resources/User' // Redirect to the User list page after confirmation
    }

    confirmUser()
  }, [])

  return null
}

export default ConfirmUserAction