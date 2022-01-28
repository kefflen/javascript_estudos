class Sequence {
  #sequence
  #alt_sequences
  constructor(sequence) {
    this.sequence = sequence
    this.#alt_sequences = []
  }

  addAlternativeSequence(situation, alt_sequence = [], begin = '*', get_back = null) {
    const ocurrences = this.#alt_sequences.filter(
      alt_seq => alt_seq.begin == begin
    ).length
    let letter = letterFromOcurrence(ocurrences)

    const prefix = `${begin + letter}`
    const sequence = alt_sequence.map(
      (sequence, index) => ({ prefix: prefix + `.${index + 1}.`, sequence })
    )
    if (get_back) {
      sequence.push({ prefix: prefix + `. ${sequence.length + 1}`, sequence: `Volta para o cenario principal no fluxo ${get_back}` })
    }

    this.#alt_sequences.push(
      { situation, sequence, begin, letter, get_back }
    )
    function letterFromOcurrence(ocurrences) {
      const letterCode = 97 + ocurrences
      if (letterCode > 127) throw "Os cenarios alternativos atigiram o limite de " + ocurrences
      return String.fromCharCode(letterCode)
    }
  }

  set sequence(sequences) {
    this.#sequence = sequences.map(
      (sequence, index) => ({ prefix: `${index + 1}.`, sequence })
    )
  }
  get sequence() {
    return this.#sequence
  }

  get alt_sequecences() {
    return this.#alt_sequences
  }
}

class UserCase {
  constructor(
    id, useCase, description,
    preCondition, sequencess,
    posCondition, extend_arr,
    includes,
  ) {
    this.id = id
    this.useCase = useCase
    this.description = description
    this.preCondition = preCondition
    this.sequence = sequence.sequence
    this.alternativeSequence = sequence.alt_sequecences
    this.posCondition = posCondition
    this.extend_arr = extend_arr
    this.includes = includes
  }
}

