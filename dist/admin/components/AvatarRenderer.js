import React from 'react';
import { Box } from '@adminjs/design-system';
const buildAvatarUrl = (record) => {
    const value = record?.params?.avatar_url;
    if (value)
        return value;
    const name = `${record?.params?.first_name || 'User'} ${record?.params?.last_name || ''}`.trim();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`;
};
const AvatarRenderer = (props) => {
    const { record } = props;
    const href = `/admin/resources/User/records/${record?.id}/show`;
    return (React.createElement(Box, { style: { display: 'flex', alignItems: 'center' } },
        React.createElement("a", { href: href, style: { display: 'inline-flex' } },
            React.createElement("img", { src: buildAvatarUrl(record), alt: "Avatar", style: { width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' } }))));
};
export default AvatarRenderer;
