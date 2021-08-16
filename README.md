[Check it out.](https://adoring-beaver-5e33cc.netlify.app/)

# React Horizontal Context Example

Welcome! This is an app demonstrating a simple use of React Context to manage state within a multi-step survey.

No, this survey won't actually store your data anywhere. :)

## Justification

In the same way Flux architecture is useful for sharing state vertically in a component tree, Flux is also useful for sharing state among component _siblings_. In other words, horizontally in a component tree.

## Design Reasoning

The data retrieved at various steps of the survey (name, email) is shared in at least one other step. The use of Context to centralize state prevents the parent component (`App.js`) from managing state for its children. The Flux state pattern here results in a cleaner, more direct architecture.

The result is the composing component only controls which component (step) to _show_.
