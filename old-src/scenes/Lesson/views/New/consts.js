export const CUSTOM_BUTTON_CLASS = 'rte-editor-custom-button'

export const STYLE_MAP = {
  STRIKETHROUGH: {
    textDecoration: 'line-through'
  },
  CODE: {
    padding: '8px',
    background: '#f2f2f2'
  }
}

export const TOOLBAR_CONFIG = {
  // Optionally specify the groups to display (displayed in the order listed).
  display: [
    'INLINE_STYLE_BUTTONS',
    'BLOCK_TYPE_BUTTONS',
    'LINK_BUTTONS',
    'BLOCK_TYPE_DROPDOWN',
    'HISTORY_BUTTONS'
  ],
  INLINE_STYLE_BUTTONS: [
    {
      label: 'Bold',
      style: 'BOLD',
      className: CUSTOM_BUTTON_CLASS
    },
    { label: 'Italic', style: 'ITALIC', className: CUSTOM_BUTTON_CLASS },
    { label: 'Underline', style: 'UNDERLINE', className: CUSTOM_BUTTON_CLASS },
    { label: 'Monospace', style: 'CODE', className: CUSTOM_BUTTON_CLASS }
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: 'Normal', style: 'unstyled' },
    { label: 'Heading Large', style: 'header-one' },
    { label: 'Heading Medium', style: 'header-two' },
    { label: 'Heading Small', style: 'header-three' }
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' }
  ]
}
