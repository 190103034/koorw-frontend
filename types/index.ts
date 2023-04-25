export { };

declare global {

    interface Block {
        id: number,
        house_id: number,
        name: string,
        house_name: string
    }

    interface User {
        id: Number,
        username: string,
        picture: string,
        name: string,
        block: Block
    }

    interface Post {
        id: number,
        hash_id: number,
        category_id: number,
        visibility_id: number,
        user: User,
        body: string,
        like_count: number,
        comment_count: number,
        child_posts: Post
    }

    interface Chat {
        id: number,
        name: string,
        last_message: {
            user: User,
            message: string
        }
    }

    interface ServiceContact {
        type: string,
        value: string
    }

    interface Service {
        name: string,
        contacts: ServiceContact[]
    }

    interface Category {
        id: number,
        name: string
    }

    interface Visibility {
        id: number,
        name: string
    }

}