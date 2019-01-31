require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.display.memoryDisplay.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.calc.calculator.js");

import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import {CalcButton, CalcDisplay} from './../components';


export default class CalculatorScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display:"0",
        };
        //initialize calculator
        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();
        //occurs when a number is pressed
        onDigitPress = (digit) => {
            this.calc.addDigit(digit);
            this.setState({ display: this.calc.getMainDisplay() });
          }

    }
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.displayContainer}>
        <CalcDisplay display={this.state.display} />
        </View>

        <View style={styles.buttomContainer}>
        <View style={styles.buttonRow}>
        <CalcButton title="C" color="white" backgroundColor="#0277BD"/>
        <CalcButton title="+/-" color="white" backgroundColor="#0277BD"/>
        <CalcButton title="%" color="white" backgroundColor="#0277BD"/>
        <CalcButton title="/" color="white" backgroundColor="#795548"/>
        </View>

        <View style={styles.buttonRow}>
        <CalcButton onPress={() => { this.onDigitPress("7") }} title="7" color="white" backgroundColor="#FF5722"/>
        <CalcButton onPress={() => { this.onDigitPress("8") }} title="8" color="white" backgroundColor="#FF5722"/>
        <CalcButton onPress={() => { this.onDigitPress("9") }} title="9" color="white" backgroundColor="#FF5722"/>
        <CalcButton title="*" color="white" backgroundColor="#795548"/>
        </View>

        <View style={styles.buttonRow}>
        <CalcButton onPress={() => { this.onDigitPress("4") }} title="4" color="white" backgroundColor="#FF5722"/>
        <CalcButton onPress={() => { this.onDigitPress("5") }} title="5" color="white" backgroundColor="#FF5722"/>
        <CalcButton onPress={() => { this.onDigitPress("6") }} title="6" color="white" backgroundColor="#FF5722"/>
        <CalcButton title="-" color="white" backgroundColor="#795548"/>
        </View>

        <View style={styles.buttonRow}>
        <CalcButton onPress={() => { this.onDigitPress("1") }} title="1" color="white" backgroundColor="#FF5722"/>
        <CalcButton onPress={() => { this.onDigitPress("2") }} title="2" color="white" backgroundColor="#FF5722"/>
        <CalcButton onPress={() => { this.onDigitPress("3") }} title="3" color="white" backgroundColor="#FF5722"/>
        <CalcButton title="+" color="white" backgroundColor="#795548"/>
        </View>

        <View style={styles.buttonRow}>
        <CalcButton onPress={() => { this.onDigitPress("0") }} title="0" color="white" backgroundColor="#FF5722" style={{flex:2}}/>
        <CalcButton onPress={() => { this.onDigitPress(".") }} title="." color="white" backgroundColor="#FF5722"/>
        <CalcButton title="=" color="white" backgroundColor="#795548"/>
       </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{flex: 1, backgroundColor:"#880E4F",},
    displayContainer:{flex: 1, justifyContent:"flex-end"},
    buttomContainer:{ paddingBottom: 20 },
    buttonRow:{flexDirection:"row", justifyContent:"space-between"},
});

 