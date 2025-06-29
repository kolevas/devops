# Build stage
FROM --platform=linux/amd64 eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
COPY .mvn/ .mvn/
COPY mvnw .
COPY mvnw.cmd .
RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# Run stage
FROM --platform=linux/amd64 eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 9090
ENTRYPOINT ["java", "-jar", "app.jar"]