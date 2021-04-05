import React from 'react';
import { Input, Row, List } from 'antd';
import AppLayout from "../../components/layouts/AppLayout";

type Props = {
    autoCompleteOptions: Array<[]>,
    onFindString: (searchText: string) => void
}

const LandingView:React.FunctionComponent<Props> = ({ autoCompleteOptions, onFindString }) => {
    const onSearch = (event:any) => {
       const inputText = event.target.value.trim();
       if(inputText.length >= 3) {
           onFindString(inputText)
       }else{
           onFindString('')
       }
    };

    return (
        <AppLayout>
            <Row>
                <Input
                    onChange={onSearch}
                    autoFocus
                    allowClear
                />
            </Row>
            <Row>
                <List
                    style={{ width: '100%' }}
                    itemLayout='horizontal'
                    dataSource={autoCompleteOptions}
                    renderItem={(item:any) => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.title}
                                description={`${item.author.firstName} ${item.author.surname}`}
                            />
                        </List.Item>
                    )}
                />
            </Row>
        </AppLayout>
    )
};

export default LandingView;
