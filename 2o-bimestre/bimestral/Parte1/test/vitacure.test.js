const { describe } = require('jest');
const { test } = require('jest');
const { BancoDeDados } = require("../src/vitacure");


// Teste para o método criarPaciente
test('Teste criarPaciente', () => {
  const bancoDeDados = new BancoDeDados();
  const paciente = { id: 1, nome: 'João' };
  bancoDeDados.criarPaciente(paciente);
  expect(bancoDeDados.lerPacientes().length).toBe(1);
});

// Teste para o método criarMedico
test('Teste criarMedico', () => {
  const bancoDeDados = new BancoDeDados();
  const medico = { id: 1, nome: 'Dr. Carlos' };
  bancoDeDados.criarMedico(medico);
  expect(bancoDeDados.lerMedicos().length).toBe(1);
});

// Teste para o método criarRecepcionista
test('Teste criarRecepcionista', () => {
  const bancoDeDados = new BancoDeDados();
  const recepcionista = { id: 1, nome: 'Maria' };
  bancoDeDados.criarRecepcionista(recepcionista);
  expect(bancoDeDados.lerRecepcionistas().length).toBe(1);
});

// Teste para o método criarFarmaceutico
test('Teste criarFarmaceutico', () => {
  const bancoDeDados = new BancoDeDados();
  const farmaceutico = { id: 1, nome: 'Ana' };
  bancoDeDados.criarFarmaceutico(farmaceutico);
  expect(bancoDeDados.lerFarmaceuticos().length).toBe(1);
});

// Teste para o método agendarConsulta
test('Teste agendarConsulta', () => {
  const bancoDeDados = new BancoDeDados();
  const consulta = { id: 1, data: '2023-07-02' };
  bancoDeDados.agendarConsulta(consulta);
  expect(bancoDeDados.lerConsultas().length).toBe(1);
});

// Teste para o método lerPacientes
test('Teste lerPacientes', () => {
  const bancoDeDados = new BancoDeDados();
  const paciente1 = { id: 1, nome: 'João' };
  const paciente2 = { id: 2, nome: 'Maria' };
  bancoDeDados.criarPaciente(paciente1);
  bancoDeDados.criarPaciente(paciente2);
  const pacientes = bancoDeDados.lerPacientes();
  expect(pacientes.length).toBe(2);
});

// Teste para o método lerMedicos
test('Teste lerMedicos', () => {
  const bancoDeDados = new BancoDeDados();
  const medico1 = { id: 1, nome: 'Dr. Carlos' };
  const medico2 = { id: 2, nome: 'Dra. Ana' };
  bancoDeDados.criarMedico(medico1);
  bancoDeDados.criarMedico(medico2);
  const medicos = bancoDeDados.lerMedicos();
  expect(medicos.length).toBe(2);
});

// Teste para o método lerRecepcionistas
test('Teste lerRecepcionistas', () => {
  const bancoDeDados = new BancoDeDados();
  const recepcionista1 = { id: 1, nome: 'Maria' };
  const recepcionista2 = { id: 2, nome: 'João' };
  bancoDeDados.criarRecepcionista(recepcionista1);
  bancoDeDados.criarRecepcionista(recepcionista2);
  const recepcionistas = bancoDeDados.lerRecepcionistas();
  expect(recepcionistas.length).toBe(2);
});

// Teste para o método lerFarmaceuticos
test('Teste lerFarmaceuticos', () => {
  const bancoDeDados = new BancoDeDados();
  const farmaceutico1 = { id: 1, nome: 'Ana' };
  const farmaceutico2 = { id: 2, nome: 'Pedro' };
  bancoDeDados.criarFarmaceutico(farmaceutico1);
  bancoDeDados.criarFarmaceutico(farmaceutico2);
  const farmaceuticos = bancoDeDados.lerFarmaceuticos();
  expect(farmaceuticos.length).toBe(2);
});

// Teste para o método lerConsultas
test('Teste lerConsultas', () => {
  const bancoDeDados = new BancoDeDados();
  const consulta1 = { id: 1, data: '2023-07-02' };
  const consulta2 = { id: 2, data: '2023-07-03' };
  bancoDeDados.agendarConsulta(consulta1);
  bancoDeDados.agendarConsulta(consulta2);
  const consultas = bancoDeDados.lerConsultas();
  expect(consultas.length).toBe(2);
});

// Teste para o método atualizarPaciente
test('Teste atualizarPaciente', () => {
  const bancoDeDados = new BancoDeDados();
  const paciente = { id: 1, nome: 'João' };
  bancoDeDados.criarPaciente(paciente);
  const pacienteAtualizado = { id: 1, nome: 'João da Silva' };
  const pacienteAtualizadoComSucesso = bancoDeDados.atualizarPaciente(1, pacienteAtualizado);
  expect(pacienteAtualizadoComSucesso).toBe(true);
});

// Teste para o método excluirRecepcionista
test('Teste excluirRecepcionista', () => {
  const bancoDeDados = new BancoDeDados();
  const recepcionista = { id: 1, nome: 'Maria' };
  bancoDeDados.criarRecepcionista(recepcionista);
  const recepcionistaExcluidoComSucesso = bancoDeDados.excluirRecepcionista(1);
  expect(recepcionistaExcluidoComSucesso).toBe(true);
});
