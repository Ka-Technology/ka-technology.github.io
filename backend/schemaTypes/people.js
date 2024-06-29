export default {
    name: 'people',
    title: 'People',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the person'
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
            description: 'Role of the person'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Image of the person'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        }
    ]
}