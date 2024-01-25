export default function IconSwitch(props) {
  const { icon, onSwitch } = props;
  return (
      <div className="icon">
         <span 
         className="material-icons"
         onClick={() => {icon === 'view_list' ? onSwitch('view_module') : onSwitch('view_list')}}>
          {icon}
         </span>
      </div>
  ) 
}