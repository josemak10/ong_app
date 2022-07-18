import { Input } from "antd"
import { SearchOutlined } from '@ant-design/icons'
import { useState } from "react"


export const SearchInput = ({ setFilter }) => {

  const addText = ({ target }) => {
    setFilter(filter => target.value);
  }

  return (
    <Input
        className="col-4 container-input-search"
        placeholder="Search"
        prefix={<SearchOutlined className="input-icon-search" />}
        bordered={false}
        onChange={ addText }
    />
  )
}
