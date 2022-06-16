import * as C from './styles';

type Props = {
    url: string;
    name: string;
}

export const PhotoItem = ({ url, name }: Props) => {

    return(
        <C.Container>
            <img 
                src={url} 
                alt={name} 
            />

            <strong>{name}</strong>
        </C.Container>
    );
}