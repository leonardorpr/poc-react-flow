export const apiResponseMock = {
  root: [
    {
      rule: 'cond',
      condition: {
        rule: 'eq',
        lhs: {
          rule: 'argument',
          name: 'idSeller',
        },
        rhs: {
          rule: 'literal',
          value: '424',
        },
      },
      true: [
        {
          rule: 'provider',
          id: '9531b6da-9414-47f0-b10e-12f0867052bf',
        },
      ],
      false: [
        {
          rule: 'cond',
          condition: {
            rule: 'ne',
            lhs: {
              rule: 'argument',
              name: 'idSubscription',
            },
            rhs: {
              rule: 'literal',
              value: null,
            },
          },
          true: [
            {
              rule: 'provider',
              id: 'a936c77d-52cc-44e4-a4d0-81d3cb9aba07',
            },
            {
              rule: 'provider',
              id: 'ef88bc64-dc01-4984-a1b4-aff575ae9735',
            },
            {
              rule: 'provider',
              id: '1115e9dd-3982-445d-988f-8879db5668e2',
            },
          ],
          false: [
            {
              rule: 'cond',
              condition: {
                rule: 'eq',
                lhs: {
                  rule: 'argument',
                  name: 'paymentMethod',
                },
                rhs: {
                  rule: 'literal',
                  value: 'CREDIT_CARD',
                },
              },
              true: [
                {
                  rule: 'cond',
                  condition: {
                    rule: 'eq',
                    lhs: {
                      rule: 'argument',
                      name: 'first',
                    },
                    rhs: {
                      rule: 'literal',
                      value: true,
                    },
                  },
                  true: [
                    {
                      rule: 'provider',
                      id: '1115e9dd-3982-445d-988f-8879db5668e2',
                    },
                    {
                      rule: 'provider',
                      id: 'ef88bc64-dc01-4984-a1b4-aff575ae9735',
                    },
                    {
                      rule: 'provider',
                      id: 'a936c77d-52cc-44e4-a4d0-81d3cb9aba07',
                    },
                  ],
                  false: [
                    {
                      rule: 'provider',
                      id: 'a936c77d-52cc-44e4-a4d0-81d3cb9aba07',
                    },
                    {
                      rule: 'provider',
                      id: 'ef88bc64-dc01-4984-a1b4-aff575ae9735',
                    },
                    {
                      rule: 'provider',
                      id: '1115e9dd-3982-445d-988f-8879db5668e2',
                    },
                  ],
                },
              ],
              false: [
                {
                  rule: 'provider',
                  id: '1115e9dd-3982-445d-988f-8879db5668e2',
                },
                {
                  rule: 'provider',
                  id: 'ef88bc64-dc01-4984-a1b4-aff575ae9735',
                },
                {
                  rule: 'provider',
                  id: 'a936c77d-52cc-44e4-a4d0-81d3cb9aba07',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
