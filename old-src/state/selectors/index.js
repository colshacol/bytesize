export const auth = (tree) => {
  return { $auth: tree.state.auth }
}

export const user = (tree) => {
  return { $user: tree.state.auth.user }
}

export const editor = (tree) => {
  return { $editor: tree.state.editor }
}

export const output = (tree) => {
  return { $output: tree.state.editor.output }
}

export const select = (selectors: []) => {
  return (tree) => {
    return selectors.reduce((final, selector) => {
      final = { ...final, ...selector(tree) }
      return final
    }, {})
  }
}
