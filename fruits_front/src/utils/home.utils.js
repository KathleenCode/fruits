export async function hloader({params}) {
    const { idh } = params;
    const get = await fetch(`https://jsonplaceholder.typicode.com/comments/${idh}`);

    if(!get.ok) {
        throw Error("cannot get")
    } else {
        return get.json();
    }
}

export async function loader() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");

    if(!response.ok) {
        throw Error("cannot fetch")
    } else {
        return response.json();
    }
}