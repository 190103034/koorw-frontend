export { };

declare global {

    interface Block {
        id: number,
        house_id: number,
        name: string,
        house_name: string
    }

    interface User {
        username: string,
        picture: string,
        name: string,
        block: Block
    }

    interface Post {
        hash_id: number,
        user: User,
        body: string,
        like_count: number,
        comment_count: number,
        child_posts: Post
    }

    interface Chat {
        newMessages: number,
        chatName: string,
        personName: string,
        message: string
    }

    interface ServiceContact {
        type: string,
        value: string
    }

    interface Service {
        name: string,
        contacts: ServiceContact[]
    }

}