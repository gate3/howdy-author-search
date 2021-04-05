import React, {useState} from 'react';
import LandingView from './LandingView';
import GlobalContext from "../../helpers/global-context";
import ArraySearch from "../../helpers/array-search";

const LandingContainer = () => {
    const [options, setOptions] = useState<any>([]);
    const searchableData = React.useContext(GlobalContext);

    const onFindString = (searchText:string) => {
        if (!searchText) {
            setOptions([]);
            return
        }
        const result = ArraySearch(searchableData, searchText);
        setOptions(result)
    };

    return <LandingView
        autoCompleteOptions={options}
        onFindString={onFindString}
    />
};

export default LandingContainer;
