function comma(numb) {
    return String(numb).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(comma(154556666234));