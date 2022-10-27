import { EntityProperty, Platform, Type, ValidationError } from '@mikro-orm/core';

export class DecimalType extends Type<number | null | undefined, string | null | undefined> {
  convertToDatabaseValue(value: number | null | undefined, platform: Platform): string {
    if (typeof value === 'number') {
      return value.toString();
    }

    throw ValidationError.invalidType(DecimalType, value, 'JS');
  }

  convertToJSValue(value: number | null | undefined, platform: Platform): number {
    const nb = +value;

    if (isNaN(nb)) throw ValidationError.invalidType(DecimalType, value, 'database');

    return nb;
  }

  getColumnType(prop: EntityProperty, platform: Platform) {
    return `decimal(${prop.length},2)`;
  }
}
