export const SearchButton = ({ label, handleClic }) => {
    return (
        <>
            <button onClick={handleClic}>{label}</button>
        </>
    )
}