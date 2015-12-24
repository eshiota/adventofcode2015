function parseWireToStringOrNumber(wire) {
    var parsedNumber = parseInt(wire, 10);

    return isNaN(parsedNumber) ? wire : parsedNumber;
}

function parseInstructionToCircuit(circuit, instructionStr) {
    var splittedInstruction = instructionStr.split(/\s/);
    var gate = splittedInstruction.filter(function(item) {
        if (['AND', 'OR', 'NOT', 'LSHIFT', 'RSHIFT'].indexOf(item) !== -1) {
            return item;
        }
    })[0] || 'PASS';
    var wireA, wireB, destination;

    switch(gate) {
        case 'OR':
        case 'AND':
        case 'LSHIFT':
        case 'RSHIFT':
            wireA = parseWireToStringOrNumber(splittedInstruction[0]);
            wireB = parseWireToStringOrNumber(splittedInstruction[2]);
            destination = splittedInstruction[4];
            break;
        case 'NOT':
            wireA = parseWireToStringOrNumber(splittedInstruction[1]);
            destination = splittedInstruction[3];
            break;
        case 'PASS':
            wireA = parseWireToStringOrNumber(splittedInstruction[0]);
            destination = splittedInstruction[2];
    }

    // Direct connection!
    if (gate === 'PASS') {
        circuit[destination] = wireA;
    } else {
        circuit[destination] = {
            gate : gate,
            wireA : wireA,
            wireB : wireB
        };
    }

    return circuit;
}

function resolveSignalForWire(wire, circuit) {
    // Direct signal! Pass it through!
    if (typeof wire === 'number') {
        return wire;
    }

    var connection = circuit[wire];

    // Direct signal! Pass it through!
    if (typeof connection === 'number') {
        return connection;
    }

    if (typeof connection === 'string') {
        return circuit[wire] = resolveSignalForWire(connection, circuit);
    }

    if (connection.gate === 'NOT') {
        return circuit[wire] = 65535 - resolveSignalForWire(connection.wireA, circuit);
    }

    if (connection.gate === 'AND') {
        return circuit[wire] = resolveSignalForWire(connection.wireA, circuit) & resolveSignalForWire(connection.wireB, circuit);
    }

    if (connection.gate === 'OR') {
        return circuit[wire] = resolveSignalForWire(connection.wireA, circuit) | resolveSignalForWire(connection.wireB, circuit);
    }

    if (connection.gate === 'LSHIFT') {
        return circuit[wire] = resolveSignalForWire(connection.wireA, circuit) << resolveSignalForWire(connection.wireB, circuit);
    }

    if (connection.gate === 'RSHIFT') {
        return circuit[wire] = resolveSignalForWire(connection.wireA, circuit) >> resolveSignalForWire(connection.wireB, circuit);
    }
}

module.exports = function(input) {
    var originalCircuit = input.split(/\n/).reduce(parseInstructionToCircuit, {});
    var newCircuit =  input.split(/\n/).reduce(parseInstructionToCircuit, {});
    var aSignal = resolveSignalForWire('a', originalCircuit);

    newCircuit['b'] = aSignal;

    return resolveSignalForWire('a', newCircuit);
};