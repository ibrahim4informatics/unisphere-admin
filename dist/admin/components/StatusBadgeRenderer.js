import React from 'react';
import { Badge } from '@adminjs/design-system';
const STATUS_COLORS = {
    CONFIRMED: { background: '#DCFCE7', color: '#15803D' },
    PENDING: { background: '#FEF3C7', color: '#B45309' },
    BANED: { background: '#FEE2E2', color: '#B91C1C' },
};
const StatusBadgeRenderer = (props) => {
    const { record } = props;
    const status = record?.params?.status;
    const colors = STATUS_COLORS[status] || { background: '#E2E8F0', color: '#475569' };
    return React.createElement(Badge, { style: { background: colors.background, color: colors.color } }, status);
};
export default StatusBadgeRenderer;
