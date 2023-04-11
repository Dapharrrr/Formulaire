export default function Input({type, name, placeholder, className, onChange}){

return (
    <label> {name}
          <input type={type} name={name} className={className} placeholder={placeholder} onChange={onChange}/>
        </label>
)

}