export function filterData(input, rest) {

    const ans = rest.filter((re) => {

        return re?.data?.name?.toLowerCase().includes(input.toLowerCase());
        
    })

    return ans;
}

