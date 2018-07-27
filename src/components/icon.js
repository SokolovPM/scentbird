import React from 'react'

import { icons } from './icons'

export const Icon = ({ name }) => (
    <span dangerouslySetInnerHTML={{ __html: icons[name] }} />
)
