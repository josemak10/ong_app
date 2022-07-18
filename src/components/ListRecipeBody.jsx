import { useContext } from 'react';
import { Rate } from 'antd';
import Switch from 'react-switch';
import { AllContext } from '../context/AllContext';


export const ListRecipeBody = () => {
 
  const { allState } = useContext( AllContext );
  const { recipes } = allState;

  const onChange = () => {}
  
  return (
    <>
        {
            recipes?.map((data, index) => (
                <div className="row container-list-recipe-body" key={index}>
                  <div className="col-8">{ data.title }</div>
                  <Rate
                    className='col-2'
                    count={4}
                    value={ data.rate }
                    disabled />
                  <Switch
                    className="col-1"
                    offColor="#79797A"
                    onColor="#8DC63F"
                    uncheckedIcon={ false }
                    checkedIcon={ false }
                    height={ 24 }
                    width={ 48 }
                    handleDiameter={ 20 }
                    onChange={ onChange }
                    checked={ data.before } />
                </div>
            ))
        }
    </>
  )
}
