
const ArraySearch = (searchableArray:Array<[]>, searchText:string) => {
    const terms = searchText.split(' ');
    return searchableArray.filter((item:any) => {
        return terms.every( term => (
            item.title.toLowerCase().indexOf(term.toLowerCase()) !== -1
        ))
    })
};

export default ArraySearch;
