export const Service = ({service}) => {
    return (
        <div>
            {!!service && <><p>{service.id}. {service.name}</p>
            <p>{service.description}</p></>}
        </div>
    )
}