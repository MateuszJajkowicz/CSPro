const SmokeIcon = ({ dynamicNumber }: { dynamicNumber: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
        <circle cx="25" cy="54" r="25" fill="#D9D9D9"></circle>
        <circle cx="75" cy="54" r="25" fill="#D9D9D9"></circle>
        <circle cx="38" cy="39" r="25" fill="#D9D9D9"></circle>
        <circle cx="63" cy="39" r="25" fill="#D9D9D9"></circle>
        <circle cx="38" cy="68" r="25" fill="#D9D9D9"></circle>
        <circle cx="63" cy="68" r="25" fill="#D9D9D9"></circle>
        <text x="50" y="72" textAnchor="middle" fill="#000" fontSize="50px">{dynamicNumber}</text>
    </svg>
);

export default SmokeIcon;