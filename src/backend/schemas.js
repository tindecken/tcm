const userSchema = {
    title: 'user schema',
    description: 'describes a user',
    version: 0,
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        email: {
            type: 'string',
            primary: true
        },
        password: {
            type: 'string'
        }
    },
    required: ['email', 'password']
}

const categorySchema = {
    title: 'category schema',
    description: 'describes a category',
    version: 0,
    type: 'object',
    properties: {
        codename: {
            type: 'string',
            primary: true
        },
        name: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        user: {
            ref: 'users',
            type: 'string' // sref-values must always be string (primary of foreign RxDocument)
        },
        testsuites: {
            type: 'array',
            ref: 'testsuites',
            items: {
                type: 'string'
            }
        },
        type: {
            type: 'string',
            default: 'category'
        }

    },
    required: ['codename', 'name']
}

const testsuiteSchema = {
    title: 'testgroup schema',
    description: 'describes a testsuite',
    version: 0,
    type: 'object',
    properties: {
        codename: {
            type: 'string',
            primary: true
        },
        name: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        status: {
            type: 'number',
            default: 0
        },
        runtime: {
            type: 'number',
            default: 0 //in seconds
        },
        testgroups: {
            type: 'array',
            ref: 'testgroups',
            items: {
                type: 'string'
            }
        },
        testcases: {
            type: 'array',
            ref: 'testcases',
            items: {
                type: 'string'
            }
        },
        user: {
            ref: 'users',
            type: 'string'
        },
        environment: {
            ref: 'environments',
            type: 'string'
        },
        type: {
            type: 'string',
            default: 'testsuite'
        }
    },
    required: ['codename', 'name']
}

const testgroupSchema = {
    title: 'testgroup schema',
    description: 'describes a testgroup',
    version: 0,
    type: 'object',
    properties: {
        codename: {
            type: 'string',
            primary: true
        },
        name: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        status: {
            type: 'number',
            default: 0
        },
        runtime: {
            type: 'number',
            default: 0 //in seconds
        },
        testcases: {
            type: 'array',
            ref: 'testcases',
            items: {
                type: 'string'
            }
        },
        type: {
            type: 'string',
            default: 'testgroup'
        },
        enabled: {
            type: 'boolean',
            default: true
        }
    },
    required: ['codename','name']
}

const testcaseSchema = {
    title: 'testcase schema',
    description: 'describes a testcase',
    version: 0,
    type: 'object',
    properties: {
        codename: {
            type: 'string',
            primary: true
        },
        name: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        status: {
            type: 'number',
            default: 0
        },
        runtime: {
            type: 'number',
            default: 0 //in seconds
        },
        keywords: {
            type: 'array',
            ref: 'keywords',
            items: {
                type: 'string'
            }
        },
        type: {
            type: 'string',
            default: 'testcase'
        },
        enabled: {
            type: 'boolean',
            default: false
        },
        primaryCase: {
            type: 'boolean',
            default: false
        },
        dependencyCase: {
            type: 'string',
        },
        keyCase: {
            type: 'boolean',
            default: false
        }
    },
    required: ['codename','name']
}


export default {
    userSchema,
    categorySchema,
    testsuiteSchema,
    testgroupSchema,
    testcaseSchema
}
