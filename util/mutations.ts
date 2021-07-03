export const createMutation = `
mutation CreateWish($name: String!, $text: String!) {
    createWish(input: {name: $name, text: $text, like: true}) {
        errors{
            field
            message
        }
        wish {
            id
            name
            text
            like
        }
    }
}
`;