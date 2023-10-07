import React, { Component } from 'react';
import ParamInput from './ParamInput';
import './ParamEditor.css';

class ParamEditor extends Component {
  constructor(props) {
    super(props);

    // Инициализируем состояние компонента на основе переданных параметров и значений модели
    this.state = {
      paramValues: props.model.paramValues,
    };
  }

  // Метод для обновления значения параметра
  updateParamValue = (paramId, value) => {
    // Создаем новый массив значений параметров на основе текущего состояния и обновляем значения
    const updatedParamValues = this.state.paramValues.map((paramValue) => {
      if (paramValue.paramId === paramId) {
        return {
          paramId,
          value,
        };
      }
      return paramValue;
    });

    // Обновляем состояние компонента
    this.setState({ paramValues: updatedParamValues });
  };

  // Метод для получения полной структуры модели
  getModel = () => {
    return {
      paramValues: this.state.paramValues,
    };
  };

  handleSaveClick = () => {
    // Вызываю метод getModel(), чтобы получить текущую модель с обновленными значениями
    const updatedModel = this.getModel();

    // Здесь можно выполнить дополнительные действия с обновленной моделью,
    // например, отправить ее на сервер или выполнить другие действия по вашему усмотрению.

    // В данном примере я просто вывожу обновленную модель в консоль.
    console.log('Обновленная модель:', updatedModel);
  };

  render() {
    return (
      <div>
        {this.props.params.map((param) => (
          <ParamInput
            key={param.id}
            param={param}
            value={
              this.state.paramValues.find((paramValue) => paramValue.paramId === param.id)?.value ||
              ''
            }
            updateParamValue={this.updateParamValue}
          />
        ))}
        <button className='param-input' onClick={this.handleSaveClick}>Сохранить</button>
      </div>
    );
  }
}

export default ParamEditor;

