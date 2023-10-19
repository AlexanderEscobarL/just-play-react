import { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

export const JPDropdown = ({ itemList, label, onItemSelected }) => {

    const [open, setOpen] = useState(false)

    const openCloseDrodpdown = () => {
        setOpen(!open)
    }

    const handleSelectedItem = (item) => {
        onItemSelected(item)
    }

    return (
        <>
            <Dropdown isOpen={open} toggle={openCloseDrodpdown} >
                <DropdownToggle caret>
                    {label}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem
                        onClick={() =>
                            handleSelectedItem({ "id": 0, "name": "b" })
                        }
                    >
                        All locations
                    </DropdownItem>
                    {itemList.map(e => {
                        return (
                            <DropdownItem
                                key={e.id}
                                onClick={() => handleSelectedItem(e)}
                            >
                                {e.name}
                            </DropdownItem>
                        )
                    })}
                </DropdownMenu>
            </Dropdown>
        </>
    )
}