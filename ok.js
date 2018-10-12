let y = [{

        "title": "Kitchen Yarns: Notes on Life, Love, and Food",
        "author": "by Ann Hood",
        "genres": [
            "Autobiography", "Cooking", "Nonfiction", "Women’s Issues"
        ],
        "publisher": "W. W. Norton \u0026 Company ",
        "isbn": " 9780393249507 ",
        "date": "December 4, 2018",
        "month": "December",
        "year": 2018
    },
    {
        "title": "Never Grow Up",
        "author": "by Jackie Chan",
        "genres": [
            "Memoir", "Nonfiction"
        ],
        "publisher": "Gallery Books ",
        "isbn": " 9781982107215 ",
        "date": "December 4, 2018",
        "month": "December",
        "year": 2018
    },
    {
        "title": "A Short History of the Girl Next Door",
        "author": "by Jared Reck",
        "genres": [
            "Fiction", "Romance", "Young Adult 12+"
        ],
        "publisher": "Knopf Books for Young Readers ",
        "isbn": " 9781524716103 ",
        "date": "December 24, 2018",
        "month": "December",
        "year": 2018
    },
    {
        "title": "Bloody Times: The Funeral of Abraham Lincoln and the Manhunt for Jefferson Davis",
        "author": "by James L. Swanson",
        "genres": [
            "History", "Young Adult 12+"
        ],
        "publisher": "HarperCollins ",
        "isbn": " 9780061560927 ",
        "date": "December 31, 2018",
        "month": "December",
        "year": 2018
    },
    {
        "title": "The Gown",
        "author": "by Jennifer Robson",
        "genres": [
            "Fiction", "Historical Fiction"
        ],
        "publisher": "William Morrow Paperbacks ",
        "isbn": " 9780062674951 ",
        "date": "December 31, 2018",
        "month": "December",
        "year": 2018
    }
]


let g = ["Women’s Issues", "Fiction", "Memoir"]
// let c = "Fiction"

let h = y.filter(b => {
    let bg = b.genres
    return bg.some(v => g.includes(v))

})
console.log(h);