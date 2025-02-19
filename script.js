

let isConfirm = confirm(`sizda 4ta ma'lumot bor. Ma'lumot o'chirmoqchimisiz? `)

let arr = [`anor`, `olma`, `uzum`, `tarvuz`]

if (isConfirm){
    arr.pop()
    alert(arr.length)

}
else{
    alert(arr.length)
}

console.log(arr);



