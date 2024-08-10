const Input = ({
    label = '',
    name = '',
    type = 'text',
    className = '',
    inputClassName = '',
    isRequired = true,
    placeholder = '',
    value = '',
    onChange = () => {},
}) => {
    return(
        <div className={`${className} `}>
            <label for={name} className="block mb-2 text-sm font-medium text-gray-800">{label}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${inputClassName}`} required={isRequired} />
        </div>
    );
}

export default Input