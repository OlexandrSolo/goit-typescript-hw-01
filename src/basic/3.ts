// task 3.1
let personInfo: string | number | object;
type Man = {
    name: string;
    gender: string;
};
type Women = {
    name: string;
    gender: string;
};
let user: Man | Women;

// task 3.2
type TypeGenre = "horror" | "comedy" | "fantasy";
function genre(chose: TypeGenre): string{
    switch (chose) {
        case "horror":
            return "The Substance"
         case "comedy":
             return "Step Brothers"
         case "fantasy":
            return "The Penguin"
        default:
            return "Not found"
    }
}

