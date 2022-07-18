import { useState } from "react"
import { Button, Dropdown, Space, Menu } from "antd"
import { DownOutlined } from '@ant-design/icons'

const items = [
    {
        label: 'All',
        key: '1',
    },
    {
        label: 'Active',
        key: '2',
    },
    {
        label: 'Inactive',
        key: '3',
    },
]

export const SearchButton = ({ setFilter }) => {

    const handleMenuClick = e => {
        setSelection(items.filter(item => item.key == e.key)[0].label)
        setFilter(row => items.filter(item => item.key == e.key)[0].label)
    };
      
      
    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={items}
        />
    );

    const [selection, setSelection] = useState(menu.props.items[0].label);

    return (
        <Dropdown
            className="container-search-button-selector"
            overlay={ menu }  
        >
            <Button>
                <Space>
                    Cooked Before:
                    <div
                        className="text-selection-search"
                    > 
                        {selection} 
                    </div>
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
}
