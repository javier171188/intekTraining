'use strict';
const { isSymmetric } = require("./exercise12");

test('Basic tests', () => {
    let noSymmetricTree = {
        value: 'A',
        left: {
            value: 'B',
            left: {
                value: 'D',
                left: null,
                right: null
            },
            right: {
                value: 'E',
                left: null,
                right: null
            }
        },
        right: {
            value: 'C',
            left: {
                value: 'F',
                left: {
                    value: 'H',
                    left: null,
                    right: null
                },
                right: {
                    value: 'I',
                    left: null,
                    right: null
                }
            },
            right: {
                value: 'G',
                left: null,
                right: {
                    value: 'J',
                    left: null,
                    right: null
                }
            }
        }
    }
    let symmetricTree = {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 3,
                left: null,
                right: null
            },
            right: {
                value: 4,
                left: {
                    value: 5,
                    left: {},
                    right: {}
                },
                right: null
            }
        },
        right: {
            value: 2,
            left: {
                value: 4,
                left: null,
                right: {
                    value: 5,
                    left: null,
                    right: null
                }
            },
            right: {
                value: 3,
                left: null,
                right: null
            }
        }
    }

    let symmetric = isSymmetric(symmetricTree);
    expect(symmetric).toBe(true);

    let noSymmetric = isSymmetric(noSymmetricTree);
    expect(noSymmetric).toBe(false);
})

test('Simple trees', () => {
    let emptyTree = {};
    let empty = isSymmetric(emptyTree);
    expect(empty).toBe(true);

    let emptyParsTree = {
        value: null,
        left: null,
        right: null
    };
    let emptyPars = isSymmetric(emptyParsTree);
    expect(emptyPars).toBe(true);

    let oneNodeTree = {
        value: 'A'
    };
    let oneNode = isSymmetric(oneNodeTree);
    expect(oneNode).toBe(true);

    let oneNodeTreeS = {
        value: 'A',
        left: null,
        right: null
    };
    let oneNodeS = isSymmetric(oneNodeTreeS);
    expect(oneNodeS).toBe(true);
})

test('Symmetric trees', () => {
    let tree = {
        value: 'A',
        left: { value: 'B' },
        right: { value: 'B' }
    }
    let symmetric = isSymmetric(tree);
    expect(symmetric).toBe(true);

    tree = {
        value: 'A',
        left: {
            value: 'B',
            left: {
                value: 'C'
            },
            right: {
                value: 'D'
            }
        },
        right: {
            value: 'B',
            left: {
                value: 'D'
            },
            right: {
                value: 'C'
            }
        }
    }

    symmetric = isSymmetric(tree);
    expect(symmetric).toBe(true);

    tree = '(A, (B,(C,(E),(F)),(D,(G),(H))), (B, (D, (H), (G)),(C, (F), (E))))';
    tree = {
        value: 'A',
        left: {
            value: 'B',
            left: {
                value: 'C',
                left: { value: 'E' },
                right: { value: 'F' }
            },
            right: {
                value: 'D',
                left: { value: 'G' },
                right: { value: 'H' }
            }
        },
        right: {
            value: 'B',
            left: {
                value: 'D',
                left: { value: 'H' },
                right: { value: 'G' }
            },
            right: {
                value: 'C',
                left: { value: 'F' },
                right: { value: 'E' },
            }
        }
    }
    symmetric = isSymmetric(tree);
    expect(symmetric).toBe(true);
})


test('No symmetric trees', () => {
    let tree = {
        value: 'A',
        left: { value: 'B' },
        right: { value: 'C' }
    }
    let symmetric = isSymmetric(tree);
    expect(symmetric).toBe(false);

    tree = {
        value: 'A',
        left: {
            value: 'B',
            left: { value: 'C' },
            right: { value: 'D' }
        },
        right: {
            value: 'B',
            left: { value: 'C' },
            right: { value: 'D' }
        }
    }
    symmetric = isSymmetric(tree);
    expect(symmetric).toBe(false);

    tree = {
        value: 'A',
        left: {
            value: 'B',
            left: {
                value: 'C',
                left: { value: 'F' },
                right: { value: 'E' }
            },
            right: {
                value: 'D',
                left: { value: 'G' },
                right: { value: 'H' }
            }
        },
        right: {
            value: 'B',
            left: {
                value: 'D',
                left: { value: 'H' },
                right: { value: 'G' }
            },
            right: {
                value: 'C',
                left: { value: 'F' },
                right: { value: 'E' }
            }
        }
    }
    symmetric = isSymmetric(tree);
    expect(symmetric).toBe(false);
})
