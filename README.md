# React Horizontal Context Example

Welcome! This is an app demonstrating a simple use of React Context to manage state between a multi-step survey.

No, this survey won't actually store your data anywhere. :)

## Justification

In the same way Flux architecture is useful for sharing state among component ancestors at varying levels, Flux is also useful for sharing state among component _siblings_.

## Design Reasoning

The data retrieved at various steps of the survey (name, email) is shared in at least one other step. The use of Context prevents the parent component (`App.js`) from composing each child (step), resulting in a cleaner, more direct architecture.

The result is the parent component only controlling which child to _show_, and not which state props each step needs to receive.
