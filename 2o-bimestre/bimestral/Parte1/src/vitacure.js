class BancoDeDados {
    constructor() {
      // Listas para armazenar os dados
      this.pacientes = []; // Lista de pacientes
      this.medicos = []; // Lista de médicos
      this.recepcionistas = []; // Lista de recepcionistas
      this.farmaceuticos = []; // Lista de farmacêuticos
      this.consultas = []; // Lista de consultas
    }
  
    criarPaciente(paciente) {
      // Caso de uso: Criar paciente
      // Adiciona um paciente à lista de pacientes
      this.pacientes.push(paciente);
    }
  
    criarMedico(medico) {
      // Caso de uso: Criar médico
      // Adiciona um médico à lista de médicos
      this.medicos.push(medico);
    }
  
    criarRecepcionista(recepcionista) {
      // Caso de uso: Criar recepcionista
      // Adiciona um recepcionista à lista de recepcionistas
      this.recepcionistas.push(recepcionista);
    }
  
    criarFarmaceutico(farmaceutico) {
      // Caso de uso: Criar farmacêutico
      // Adiciona um farmacêutico à lista de farmacêuticos
      this.farmaceuticos.push(farmaceutico);
    }
  
    agendarConsulta(consulta) {
      // Caso de uso: Agendar consulta
      // Adiciona uma consulta à lista de consultas
      this.consultas.push(consulta);
    }
  
    lerPacientes() {
      // Caso de uso: Ler pacientes
      // Retorna a lista de pacientes cadastrados
      return this.pacientes;
    }
  
    lerMedicos() {
      // Caso de uso: Ler médicos
      // Retorna a lista de médicos cadastrados
      return this.medicos;
    }
  
    lerRecepcionistas() {
      // Caso de uso: Ler recepcionistas
      // Retorna a lista de recepcionistas cadastrados
      return this.recepcionistas;
    }
  
    lerFarmaceuticos() {
      // Caso de uso: Ler farmacêuticos
      // Retorna a lista de farmacêuticos cadastrados
      return this.farmaceuticos;
    }
  
    lerConsultas() {
      // Caso de uso: Ler consultas
      // Retorna a lista de consultas agendadas
      return this.consultas;
    }
  
    atualizarPaciente(id, pacienteAtualizado) {
      // Caso de uso: Atualizar paciente
      // Atualiza os detalhes de um paciente existente
      // Procura o paciente na lista de pacientes pelo ID fornecido
      const index = this.pacientes.findIndex(paciente => paciente.id === id);
      if (index !== -1) {
        // Se o paciente for encontrado, substitui os detalhes pelo paciente atualizado
        this.pacientes[index] = pacienteAtualizado;
        return true; // Retorna true para indicar que o paciente foi atualizado com sucesso
      }
      return false; // Retorna false para indicar que o paciente não foi encontrado
    }
  
    excluirRecepcionista(id) {
        // Caso de uso: Excluir recepcionista
        // Remove um recepcionista do sistema
        // Procura o recepcionista na lista de recepcionistas pelo ID fornecido
        const index = this.recepcionistas.findIndex(recepcionista => recepcionista.id === id);
        if (index !== -1) {
          // Se o recepcionista for encontrado, remove-o da lista
          this.recepcionistas.splice(index, 1);
          return true; // Retorna true para indicar que o recepcionista foi excluído com sucesso
        }
        return false; // Retorna false para indicar que o recepcionista não foi encontrado
      }
      
      } // Fim da classe BancoDeDados
      
      module.exports = BancoDeDados;
      